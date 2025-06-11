from fastapi import APIRouter, HTTPException
from app.models.request_models import PromptRequest
from app.service.claude_service import invoke_claude

router = APIRouter()

@router.post("/ask")
def ask_route(request: PromptRequest):
    try:
        result = invoke_claude(request.prompt)
        return {"response": result}
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))
