
from django.db import models
from accounts.models import CustomUser
# from django.contrib.auth.models import User

class Criminal(models.Model):
    GENDER_CHOICES = (
        ('M', 'Male'),
        ('F', 'Female')
    )
    SSN  = models.CharField(max_length=100)
    first_name = models.CharField(max_length=100)
    middle_name = models.CharField(max_length=100,blank=True)
    last_name = models.CharField(max_length=100)
    date_of_birth = models.DateField()
    gender = models.CharField(max_length=1, choices=GENDER_CHOICES)
    nationality = models.CharField(max_length=100)
    height = models.DecimalField(max_digits=5, decimal_places=2)
    weight = models.DecimalField(max_digits=5, decimal_places=2)
    eye_color = models.CharField(max_length=50)
    hair_color = models.CharField(max_length=50)
    tattoos = models.TextField(blank=True)
    scars = models.TextField(blank=True)
    identifying_features = models.TextField(blank=True)
    address = models.CharField(max_length=200)
    contact_information = models.CharField(max_length=200)
    gang_affiliations = models.TextField(blank=True)
    case_history = models.TextField(blank=False)
    photo = models.ImageField(upload_to='criminal_photos/', blank=True)
    created_date = models.DateField(auto_now_add=True)
    created_by = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True)
    document = models.FileField(upload_to='criminal_documents/', blank=True ,null=True)
    def str(self):
        return f'{self.first_name} {self.last_name}'

class Requests(models.Model):
    from_acc = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name="sent_requests")  # Add related_name
    to_acc = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name="received_requests")  # Add related_name
    message = models.CharField(max_length=500)
    name = models.CharField(max_length=200)
    fname = models.CharField(max_length=200)
    lname = models.CharField(max_length=200)
    id_no = models.CharField(max_length=200)
    photo = models.ImageField(upload_to='request_photos/', blank=True)

class Responces(models.Model):
    from_acc = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name="sent_responses")  # Add related_name
    to_acc = models.ForeignKey(CustomUser, on_delete=models.SET_NULL, null=True, related_name="received_responses")  # Add related_name
    message = models.CharField(max_length=500)
    url = models.CharField(max_length=200, null=True)
    match_found = models.BooleanField(default=False)
