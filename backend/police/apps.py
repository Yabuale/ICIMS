from django.apps import AppConfig


class PoliceConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'police'
    def ready(self):
        from.scheduler import scheduler
        scheduler.start()
