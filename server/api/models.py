from django.db import models

# Create your models here.


class AddUsers(models.Model):
    username = models.CharField()
    password = models.Field()
