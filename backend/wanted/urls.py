from django.urls import path
from .views import WantedCriminalView
from . import views

urlpatterns = [
    path('', WantedCriminalView.as_view()),
    path('addWanted', views.addWanted),

]