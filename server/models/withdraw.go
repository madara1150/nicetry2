package models

import (
	"gorm.io/gorm"
)

type Withdraw struct {
	gorm.Model
	UserId     string
	Amount     float64
	BankName   string
	BankNumber string
	Status     bool
}
