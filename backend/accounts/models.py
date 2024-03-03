from django.db import models
import uuid
from django.contrib.auth.models import AbstractUser, BaseUserManager

class CustomUserManager(BaseUserManager):
    def create_user(self, email, password=None, **extra_fields):
        if not email:
            raise ValueError('The Email field must be set')
        email = self.normalize_email(email)
        user = self.model(email=email, **extra_fields)
        user.set_password(password)
        user.save(using=self._db)
        return user

    def create_superuser(self, email, password=None, **extra_fields):
        extra_fields.setdefault('is_staff', True)
        extra_fields.setdefault('is_superuser', True)
        return self.create_user(email, password, **extra_fields)

class CustomUser(AbstractUser):
    email = models.EmailField(unique=True)
    password = models.CharField(max_length=128)
    id_no = models.CharField(max_length=128)
    phone_number = models.CharField(max_length=15, blank=True)
    ROLE_CHOICES = [
        ('police', 'Police'),
        ('clerk', 'Clerk'),
        ('admin', 'Admin'),
        ('local', 'Local')
    ]
    role = models.CharField(max_length=10, choices=ROLE_CHOICES)
    branch = models.CharField(max_length=255, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    is_staff = models.BooleanField(default=False)
    created_date = models.DateField(auto_now_add=True)
    objects = CustomUserManager()
    USERNAME_FIELD = 'email'
    REQUIRED_FIELDS = ['id_no', 'role']

    def __str__(self):
        return self.email

class Branch(models.Model): 
    branch_name  = models.CharField(max_length=100)
    woreda = models.CharField(max_length=100)
    zone = models.CharField(max_length=100)
    region = models.CharField(max_length=100)
    phone_no = models.CharField(max_length=100)
    eamil_address = models.CharField(max_length=100)
    def str(self):
        return self.branch_name