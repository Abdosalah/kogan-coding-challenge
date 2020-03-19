package main

import (
	"math"
	"testing"

	"github.com/stretchr/testify/assert"
)

func TestCalcCubicWeight(t *testing.T) {
	testCases := []struct {
		name          string
		Width         float64
		Height        float64
		Length        float64
		ExpectedValue float64
	}{
		{"TestCase 1", 26, 5, 26, 0.85},
		{"TestCase 2", 15, 12, 13, 0.59},
		{"TestCase 3", 15, 1, 13, 0.05},
		{"TestCase 4", 49.6, 89, 38.7, 42.71},
	}

	for _, tc := range testCases {
		t.Run(tc.name, func(t *testing.T) {
			calculatedValue := calcCubicWeight(tc.Width, tc.Height, tc.Length)
			roundedValue := math.Round(calculatedValue*100) / 100
			assert.Equal(t, tc.ExpectedValue, roundedValue)
		})
	}
}

func TestFilterProducts(t *testing.T) {
	testProducts := []Product{
		{
			Category:    "Gadgets",
			Title:       "10 Pack Family Car Sticker Decals",
			CubicWeight: 0,
			Size:        Dimensions{15, 1, 13},
		},
		{
			Category:    "Air Conditioners",
			Title:       "Window Seal for Portable Air Conditioner Outlets",
			CubicWeight: 0,
			Size:        Dimensions{26, 5, 26},
		},
		{
			Category:    "Batteries",
			Title:       "10 Pack Kogan CR2032 3V Button Cell Battery",
			CubicWeight: 0,
			Size:        Dimensions{5.8, 0.3, 19},
		},
		{
			Category:    "Cables \u0026 Adapters",
			Title:       "3 Pack Apple MFI Certified Lightning to USB Cable (3m)",
			CubicWeight: 0,
			Size:        Dimensions{10, 3, 20},
		},
		{
			Category:    "Air Conditioners",
			Title:       "Kogan 10,000 BTU Portable Air Conditioner (2.9KW)",
			CubicWeight: 0,
			Size:        Dimensions{49.6, 89, 38.7},
		},
	}
	testData := Data{
		Objects: testProducts,
		Next:    "test_url",
	}

	testData.filterProducts("Gadgets")

	for _, tc := range testData.Objects {
		t.Run(tc.Title, func(t *testing.T) {
			if tc.Category != "Gadgets" {
				assert.Equal(t, tc.CubicWeight, 0.0)
			}
		})
	}
}
