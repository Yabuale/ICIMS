from django.urls import path
from . import views
urlpatterns = [
    path('login/',views.login),
    path('resetpassword/',views.reset_password),
    path('clerknum/',views.clerkNum),
    path('policenum/',views.policenum),
    path('localnum/',views.localnum),
    path('adminnum/',views.adminnum),
]