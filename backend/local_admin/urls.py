from django.urls import path
from .views import AccountView
from . import views

urlpatterns = [
    path('accounts/', AccountView.as_view()),
    path('accounts/add/',views.addAccount),
  
    

]