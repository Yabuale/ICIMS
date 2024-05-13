from django.urls import path
from . import views
urlpatterns = [
    path('login/',views.login),
    path('resetpassword/',views.reset_password),
]