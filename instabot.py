from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
from selenium.common.exceptions import ElementClickInterceptedException
import time
from dotenv import  load_dotenv
import os

load_dotenv()
USERNAME = os.getenv("USERNAME")
PASSWORD = os.getenv("PASSWORD")

class InstaFolower:
    def __init__(self):
        chrome_opyios = webdriver.ChromeOptions()
        
