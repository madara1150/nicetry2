package models

type Donation struct {
	Id        string
	UserId    string
	PostId    string
	Amount    float64
	Status    bool
	CreatedAt string
}
