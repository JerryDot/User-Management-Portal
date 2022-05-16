

from users.models import UserModel, UpdateUserModel
from fastapi import APIRouter, Body, HTTPException, status
from fastapi.responses import JSONResponse
from fastapi.encoders import jsonable_encoder
from typing import List
from dependencies import db

users_api = APIRouter()


# Naively this route supports adding a single user but possible it should support multi-add
@users_api.post("/", response_description="Add new user", response_model=UserModel)
async def create_user(user: UserModel = Body(...)):
    user = jsonable_encoder(user)
    new_user = db["users"].insert_one(user)
    created_user = db["users"].find_one({"_id": new_user.inserted_id})
    return JSONResponse(status_code=status.HTTP_201_CREATED, content=created_user)


@users_api.get(
    "/", response_description="List all users", response_model=List[UserModel]
)
async def list_users():
    # TODO: add pagination rather than hard-coded limit of 1000
    users = db["users"].find().batch_size(1000)
    return list(users)


@users_api.get(
    "/{id}", response_description="Get a single user", response_model=UserModel
)
async def show_user(id: str):
    if (user := db["users"].find_one({"_id": id})) is not None:
        return user

    raise HTTPException(status_code=404, detail=f"User {id} not found")


@users_api.put("/{id}", response_description="Update a user", response_model=UserModel)
async def update_user(id: str, user: UpdateUserModel = Body(...)):
    user = {k: v for k, v in user.dict().items() if v is not None}

    if len(user) >= 1:
        update_result = db["users"].update_one({"_id": id}, {"$set": user})

        if update_result.modified_count == 1:
            if (
                updated_user := db["users"].find_one({"_id": id})
            ) is not None:
                return updated_user

    if (existing_user := db["users"].find_one({"_id": id})) is not None:
        return existing_user

    raise HTTPException(status_code=404, detail=f"User {id} not found")


@users_api.delete("/{id}", response_description="Delete a user")
async def delete_user(id: str):
    delete_result = db["users"].delete_one({"_id": id})

    if delete_result.deleted_count == 1:
        return JSONResponse(status_code=status.HTTP_200_OK, content={"message": "User deleted"})

    raise HTTPException(status_code=404, detail=f"User {id} not found")
