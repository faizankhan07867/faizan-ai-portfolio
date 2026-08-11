from pydantic import BaseModel, Field
from typing import List, Optional


class ChatMessage(BaseModel):
    role: str
    content: str


class ChatRequest(BaseModel):
    message: str = Field(..., min_length=1)
    history: List[ChatMessage] = []


class JobMatchRequest(BaseModel):
    job_description: str = Field(..., min_length=10)