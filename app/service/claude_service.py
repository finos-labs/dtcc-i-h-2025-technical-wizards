import json
import boto3

MODEL_ID = "anthropic.claude-3-5-sonnet-20241022-v2:0"
AWS_REGION = "us-east-1"  # update if needed

# Create client using IAM role credentials automatically provided to EC2
bedrock = boto3.client("bedrock-runtime", region_name=AWS_REGION)

def invoke_claude(prompt: str) -> str:
    body = {
        "anthropic_version": "bedrock-2023-05-31",
        "messages": [{"role": "user", "content": prompt}],
        "max_tokens": 1024,
        "temperature": 0.7,
        "top_p": 1.0,
    }

    response = bedrock.invoke_model(
        modelId=MODEL_ID,
        contentType="application/json",
        accept="application/json",
        body=json.dumps(body),
    )
    response_body = json.loads(response["body"].read())
    return response_body["content"][0]["text"]
