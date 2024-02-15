package models

type Topup struct {
	Id         string
	UserId     string
	Amount     float64
	BankName   string
	BankNumber string
	TopupSet   float64
	Status     bool
	TopupDate  string
}
