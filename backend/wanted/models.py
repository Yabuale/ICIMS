from django.db import models

class WantedCriminal(models.Model):
    name = models.CharField(max_length=150)
    alias = models.CharField(max_length=100, blank=True)
    description = models.TextField()
    photo = models.ImageField(upload_to='criminal_photos/')
    age = models.PositiveIntegerField()
    gender = models.CharField(max_length=10)
    nationality = models.CharField(max_length=100)
    criminal_offenses = models.TextField()
    last_known_location = models.CharField(max_length=100)
    reward = models.DecimalField(max_digits=10, decimal_places=2, default=0)
    contact_information = models.TextField()

    def __str__(self):
        return self.name