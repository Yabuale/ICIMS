from django.apps import AppConfig


class ClerkConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'clerk'
    def ready(self):
        from.scheduler import scheduler
        scheduler.start()
