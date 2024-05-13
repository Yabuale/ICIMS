from django.apps import AppConfig


class CriminalConfig(AppConfig):
    default_auto_field = 'django.db.models.BigAutoField'
    name = 'criminal'
    def ready(self):
        from.scheduler import scheduler
        scheduler.start()
