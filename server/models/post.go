package models

import "gorm.io/gorm"

type Post struct {
	gorm.Model
	UserId string
	Info   string
	Like   int
}
