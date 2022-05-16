
from utils import PyObjectId
from pydantic import BaseModel, Field, EmailStr
from typing import Literal, Optional
from bson import ObjectId


UserRole = Literal['Administrator', 'Regular User']


class UserModel(BaseModel):
    id: PyObjectId = Field(default_factory=PyObjectId, alias="_id")
    first_name: str = Field(...)
    email: EmailStr = Field(...)
    last_name: str = Field(...)
    role: UserRole = Field(...)

    class Config:
        allow_population_by_field_name = True
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "first_name": "Jane",
                "last_name": "Doe",
                "role": "Regular User",
                "email": "jdoe@example.com"
            }
        }


class UpdateUserModel(BaseModel):
    name: Optional[str]
    email: Optional[EmailStr]
    last_name: Optional[str]
    role: Optional[UserRole]

    class Config:
        arbitrary_types_allowed = True
        json_encoders = {ObjectId: str}
        schema_extra = {
            "example": {
                "first_name": "Jane",
                "last_name": "Doe",
                "role": "Regular User",
                "email": "jdoe@example.com"
            }
        }
