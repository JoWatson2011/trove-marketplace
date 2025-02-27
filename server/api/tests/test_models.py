from django.test import TestCase
# from api.models import Users
from django.contrib.auth.models import User
import sys


class UserModelsTest(TestCase):
    def setUp(self):
        User.objects.create_user(
            "joluvsbread", "jo@bread.com", "theyseemeR0llin")

    def test_fetch_user(self):
        """
        200: fetch_user() returns the added user
        """
        print(sys.argv, "<< env")
        user = User.objects.get(username="joluvsbread")
        print(user.date_joined)
        self.assertEqual(user, "joluvsbread")

        # seed.seed_db("test_trove_marketplace")
