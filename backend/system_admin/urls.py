from django.urls import path
from .views import branchView,localAccountView,branchDetail
from . import views

urlpatterns = [
    path('accounts/', localAccountView.as_view()),
    path('accounts/add/',views.addAccount),
    path('branch/', branchView.as_view()),
    path('branch/<int:pk>/', branchDetail.as_view()),
    path('branch/add', views.addBranch),

    

]