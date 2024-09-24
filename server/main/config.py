from functools import lru_cache
from typing import Optional

from pydantic_settings import BaseSettings, SettingsConfigDict


class BaseConfig(BaseSettings):
    ENV_STATE: Optional[str] = None

    model_config = SettingsConfigDict(env_file=".env", extra="ignore")


class GlobalConfig(BaseConfig):
    # This is a global configuration for environment variables
    DB_URL: Optional[str] = None


class DevConfig(GlobalConfig):
    model_config = SettingsConfigDict(env_prefix="DEV_", extra="ignore")


class ProdConfig(GlobalConfig):
    model_config = SettingsConfigDict(env_prefix="PROD_", extra="ignore")


@lru_cache()
def get_config(env_state: str):
    configs = {"dev": DevConfig, "prod": ProdConfig}
    return configs[env_state]()


config = get_config(BaseConfig().ENV_STATE)