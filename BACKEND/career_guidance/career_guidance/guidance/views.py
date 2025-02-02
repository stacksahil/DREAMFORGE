import openai
from django.conf import settings
from rest_framework.views import APIView
from rest_framework.response import Response
from rest_framework import status

openai.api_key = settings.OPENAI_API_KEY

class CareerGuidanceView(APIView):
    def post(self, request):

        name = request.data.get('name')
        age = request.data.get('age')
        education = request.data.get('education')
        skills = request.data.get('skills')
        interests = request.data.get('interests')


        if not (name and age and education and skills and interests):
            return Response({"error": "Missing required fields"}, status=status.HTTP_400_BAD_REQUEST)


        prompt = f"""
        You are a career guidance expert. Based on the following information, provide career recommendations for the user:

        Name: {name}
        Age: {age}
        Education: {education}
        Skills: {skills}
        Interests: {interests}

        Provide actionable career advice, possible job roles, industries to explore, and educational resources.
        """

        try:
            response = openai.Completion.create(
                engine="text-davinci-003", 
                prompt=prompt,
                max_tokens=500,
                temperature=0.7
            )
            career_advice = response.choices[0].text.strip()
            return Response({"career_advice": career_advice}, status=status.HTTP_200_OK)
        except Exception as e:
            return Response({"error": str(e)}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
