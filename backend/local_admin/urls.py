from django.urls import path
from .views import AccountView,AccountDetail
from . import views

urlpatterns = [
    path('accounts/', AccountView.as_view()),
    path('accounts/<int:pk>/', AccountDetail.as_view()),

    path('accounts/add/',views.addAccount),
  
    

]