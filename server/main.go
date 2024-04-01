package main

import (
	"fmt"

	"github.com/gofiber/fiber/v2"
	"github.com/madara/nicetry2/api/auth"
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

	app := fiber.New()

	app.Post("auth/register", func(c *fiber.Ctx) error {

		user := new(models.User)

		if err := c.BodyParser(user); err != nil {
			return c.SendStatus(fiber.StatusBadRequest)

		}
		err = auth.CreateUser(db, user)

		return c.JSON(fiber.Map{
			"message": "Register Successful",
		})

	})

	app.Listen(":8000")
}
