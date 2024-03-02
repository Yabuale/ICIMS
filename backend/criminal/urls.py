from django.urls import path
from .views import CriminalView
from . import views

urlpatterns = [
    path('', CriminalView.as_view()),
    path('addcriminal', views.addCriminal),
    path('send',views.send)
]