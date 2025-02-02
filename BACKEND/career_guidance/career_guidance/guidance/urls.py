from django.urls import path
from .views import CareerGuidanceView

urlpatterns = [
    path('career-guidance/', CareerGuidanceView.as_view(), name='career_guidance'),
]

# this is where the frontend will hit the url
