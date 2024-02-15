package models

import "gorm.io/gorm"

type Topup struct {
	gorm.Model
	UserId     string
	Amount     float64
	BankName   string
	BankNumber string
	TopupSet   float64
	Status     bool
}
