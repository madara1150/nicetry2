package models

type Withdraw struct {
	Id         string
	UserId     string
	Amount     float64
	BankName   string
	BankNumber string
	Status     bool
	CreatedAt  string
}
