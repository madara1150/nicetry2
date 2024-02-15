package models

import (
	"gorm.io/gorm"
)

type User struct {
	gorm.Model
	Username    string
	Password    string
	Fname       string
	Lname       string
	Role        string
	Email       string
	PhoneNumber string
	Info        string
	Coin        float64
}
