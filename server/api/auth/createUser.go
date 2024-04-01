package auth

import (
	models "github.com/madara/nicetry2/models"
	"golang.org/x/crypto/bcrypt"

	"gorm.io/gorm"
)

func CreateUser(db *gorm.DB, user *models.User) error {
	hashedPassword, err := bcrypt.GenerateFromPassword([]byte(user.Password), bcrypt.DefaultCost)

	if err != nil {
		return err
	}

	user.Password = string(hashedPassword)
	result := db.Create(user)

	if result.Error != nil {
		return result.Error
	}
	return nil
}
