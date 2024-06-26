from django.db import models
from django.utils import timezone
from accounts.models import CustomUser

class WantedCriminal(models.Model):
    name = models.CharField(max_length=100)
    alias = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    photo = models.ImageField(upload_to='criminal_photos/' , default='criminal_photos/')
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    nationality = models.CharField(max_length=100)
    criminal_offenses = models.TextField()
    last_known_location = models.CharField(max_length=100)
    reward = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    contact_information = models.TextField()
    date_posted = models.DateField(default=timezone.now)
    posted_by = models.ForeignKey(CustomUser, on_delete=models.CASCADE, null=True, blank=True)

    