from django.urls import path
from .views import branchView
from . import views

urlpatterns = [
    path('branch/', branchView.as_view()),

]