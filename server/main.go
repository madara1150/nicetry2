package main

import (
	"fmt"

	"github.com/madara/nicetry2/models"
	"gorm.io/driver/postgres"
	"gorm.io/gorm"
)

const (
	host     = "localhost"
	port     = 5432
	user     = "myuser"
	password = "mypassword"
	dbname   = "mydatabase"
)

func main() {

	dsn := fmt.Sprintf("host=%s port=%d user=%s "+
		"password=%s dbname=%s sslmode=disable",
		host, port, user, password, dbname)
	db, err := gorm.Open(postgres.Open(dsn), &gorm.Config{})
	if err != nil {
		panic("failed to connect to database")
	}
	db.AutoMigrate(&models.User{}, &models.Comment{}, &models.Donation{}, &models.Image{}, &models.Like{}, &models.Post{}, &models.Report{}, &models.Topup{}, &models.Withdraw{})
	fmt.Println("Database migration completed!")
}
