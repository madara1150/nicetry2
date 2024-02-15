package models

import "gorm.io/gorm"

type Image struct {
	gorm.Model
	PostId   string
	UserId   string
	TopupId  string
	filePath string
}
