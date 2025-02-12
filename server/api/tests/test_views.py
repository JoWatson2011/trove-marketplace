from django.test import TestCase
from django.urls import reverse

# client = Client()


class HealthcheckViewTests(TestCase):
    def test_healthcheck_responds(self):
        """
        GET /api/healthcheck 200 : responds with "API online" 
        """
        response = self.client.get(reverse("healthcheck"))

        self.assertEqual(response.status_code, 200)
        self.assertEqual(response.json(), {"message": "API online"})
