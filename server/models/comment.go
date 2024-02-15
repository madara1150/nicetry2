package models

import "gorm.io/gorm"

type Comment struct {
	gorm.Model
	UserId string
	PostId string
	Info   string
}
