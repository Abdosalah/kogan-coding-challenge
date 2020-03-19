package main

import (
	"encoding/json"
	"fmt"
	"io/ioutil"
	"log"
	"math"
	"net/http"

	"github.com/gorilla/mux"
)

type Dimensions struct {
	Width  float64
	Height float64
	Length float64
}

type Product struct {
	Category    string
	Title       string
	Weight      float64
	CubicWeight float64
	Size        Dimensions
}

type Data struct {
	Objects []Product
	Next    string
}

const filterCategory = "Air Conditioners"
const portNumber = ":8000"

func calcCubicWeight(width, height, length float64) float64 {
	cubicWeight := (width / 100.0) * (height / 100.0) * (length / 100.0) * 250.0
	return cubicWeight
}

func (myData *Data) filterProducts(desiredCategory string) {
	for index, myProduct := range myData.Objects {
		if myProduct.Category == desiredCategory {
			cubicWeight := calcCubicWeight(myProduct.Size.Width, myProduct.Size.Height, myProduct.Size.Length)
			// Rounding up the value to 2 decimal places and assigning it to the Product
			myData.Objects[index].CubicWeight = math.Round(cubicWeight*100) / 100
		}
	}
}

func getData(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")
	w.Header().Set("Access-Control-Allow-Origin", "*")
	queryParams := r.URL.Query() // Get params

	resp, err := http.Get(queryParams["url"][0])
	if err != nil {
		log.Fatalln(err)
	}

	defer resp.Body.Close()

	body, err := ioutil.ReadAll(resp.Body)
	if err != nil {
		log.Fatalln(err)
	}

	// Map the data to the struct
	var myData Data
	json.Unmarshal(body, &myData)

	myData.filterProducts(filterCategory)
	myByteData, _ := json.Marshal(myData)

	json.NewEncoder(w).Encode(string(myByteData))

}

func main() {
	// Init Router
	router := mux.NewRouter()

	// Route Handlers / Endpoints
	router.HandleFunc("/", getData).Methods("GET")

	// START THE SERVER
	fmt.Println("Now listening on PORT", portNumber)
	log.Fatal(http.ListenAndServe(portNumber, router))
}
