import pandas as pd
import plotly.express as px
from dagster import AssetIn, MetadataValue, asset, file_relative_path
from dagster_dbt import load_assets_from_dbt_project


DBT_PROJECT_PATH = file_relative_path(__file__, "../../my_dbt_project")
DBT_PROFILES = file_relative_path(__file__, "../../my_dbt_project/config")

# if larger project use load_assets_from_dbt_manifest
# dbt_assets = load_assets_from_dbt_manifest(json.load(DBT_PROJECT_PATH + "manifest.json", encoding="utf8"))
dbt_assets = load_assets_from_dbt_project(
    project_dir=DBT_PROJECT_PATH, profiles_dir=DBT_PROFILES
)
