package com.servlet.api;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.io.PrintWriter;

@WebServlet("/api/hotels")
public class ApiHotelsServlet extends HttpServlet {
    private static final long serialVersionUID = 1L;

    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
        response.setContentType("application/json");
        response.setCharacterEncoding("UTF-8");
        PrintWriter out = response.getWriter();

        String hotelIdParam = request.getParameter("id");
        if (hotelIdParam != null && !hotelIdParam.trim().isEmpty()) {
            try {
                int id = Integer.parseInt(hotelIdParam.trim());
                String singleHotelJson = getSingleHotelJson(id);
                if (singleHotelJson != null) {
                    out.write(singleHotelJson);
                } else {
                    response.setStatus(HttpServletResponse.SC_NOT_FOUND);
                    out.write("{\"error\":\"Hotel not found\"}");
                }
            } catch (NumberFormatException e) {
                response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
                out.write("{\"error\":\"Invalid hotel ID format\"}");
            }
        } else {
            out.write(getAllHotelsJson());
        }
    }

    private String getAllHotelsJson() {
        return "[\n" +
            "  {\n" +
            "    \"id\": 1,\n" +
            "    \"backendHotelId\": 234874,\n" +
            "    \"name\": \"Hotel Grand Palace\",\n" +
            "    \"category\": \"city\",\n" +
            "    \"price\": 20000,\n" +
            "    \"priceMin\": 15000,\n" +
            "    \"priceMax\": 20000,\n" +
            "    \"rating\": 4.5,\n" +
            "    \"location\": \"City Center\",\n" +
            "    \"description\": \"Located in the heart of the city with luxury amenities and scenic views.\",\n" +
            "    \"locationOverview\": \"The Grand Palace Hotel is situated in the bustling city center, providing easy access to shopping, entertainment, and historical landmarks.\",\n" +
            "    \"images\": [\"images/hotel1.jpg\", \"images/room1.jpg\", \"images/lobby1.jpg\"],\n" +
            "    \"amenities\": [\"Free WiFi\", \"Swimming Pool\", \"Spa & Wellness\", \"Fine Dining\", \"Fitness Center\", \"24/7 Room Service\"]\n" +
            "  },\n" +
            "  {\n" +
            "    \"id\": 2,\n" +
            "    \"backendHotelId\": 764351,\n" +
            "    \"name\": \"Sunny Beach Resort\",\n" +
            "    \"category\": \"beach\",\n" +
            "    \"price\": 45000,\n" +
            "    \"priceMin\": 45000,\n" +
            "    \"priceMax\": 50000,\n" +
            "    \"rating\": 4.2,\n" +
            "    \"location\": \"Luxury District\",\n" +
            "    \"description\": \"Enjoy your stay by the beach with relaxing sunbeds and beautiful sunsets.\",\n" +
            "    \"locationOverview\": \"Situated in the prestigious luxury district, the hotel offers proximity to high-end shopping, fine dining, and exclusive nightlife.\",\n" +
            "    \"images\": [\"images/hotel2.jpg\", \"images/room2.jpg\", \"images/dining2.jpg\"],\n" +
            "    \"amenities\": [\"Private Beach\", \"Infinity Pool\", \"Ocean View Dining\", \"Water Sports\", \"Beach Bar\", \"Concierge Service\"]\n" +
            "  },\n" +
            "  {\n" +
            "    \"id\": 3,\n" +
            "    \"backendHotelId\": 384920,\n" +
            "    \"name\": \"Mountain Escape Lodge\",\n" +
            "    \"category\": \"mountain\",\n" +
            "    \"price\": 35000,\n" +
            "    \"priceMin\": 35000,\n" +
            "    \"priceMax\": 40000,\n" +
            "    \"rating\": 4.0,\n" +
            "    \"location\": \"Highland Trails\",\n" +
            "    \"description\": \"Get away from it all and relax in the mountains surrounded by nature.\",\n" +
            "    \"locationOverview\": \"Perched in serene mountain trails, surrounded by pine forests and fresh alpine breezes.\",\n" +
            "    \"images\": [\"images/hotel3.jpg\", \"images/room3.jpg\", \"images/mountainview.jpg\"],\n" +
            "    \"amenities\": [\"Fireplace Suites\", \"Mountain View\", \"Hiking Tours\", \"Sauna\", \"Organic Restaurant\", \"Heated Pool\"]\n" +
            "  },\n" +
            "  {\n" +
            "    \"id\": 4,\n" +
            "    \"backendHotelId\": 491029,\n" +
            "    \"name\": \"Mountain View Retreat\",\n" +
            "    \"category\": \"mountain\",\n" +
            "    \"price\": 15000,\n" +
            "    \"priceMin\": 10000,\n" +
            "    \"priceMax\": 15000,\n" +
            "    \"rating\": 4.6,\n" +
            "    \"location\": \"Alpine Valley\",\n" +
            "    \"description\": \"Perfect for business travelers looking for convenience and comfort in the city.\",\n" +
            "    \"locationOverview\": \"Nestled in Alpine Valley with panoramic hill views and direct access to outdoor adventure spots.\",\n" +
            "    \"images\": [\"images/hotel4.jpg\", \"images/room4.jpg\", \"images/skyview.jpg\"],\n" +
            "    \"amenities\": [\"Free WiFi\", \"Business Lounge\", \"Breakfast Included\", \"Express Check-in\", \"Gym\", \"Free Parking\"]\n" +
            "  },\n" +
            "  {\n" +
            "    \"id\": 5,\n" +
            "    \"backendHotelId\": 501928,\n" +
            "    \"name\": \"Lakeside Paradise Inn\",\n" +
            "    \"category\": \"lake\",\n" +
            "    \"price\": 40000,\n" +
            "    \"priceMin\": 40000,\n" +
            "    \"priceMax\": 45000,\n" +
            "    \"rating\": 4.3,\n" +
            "    \"location\": \"Crystal Lake Coast\",\n" +
            "    \"description\": \"A peaceful retreat by the lake with stunning views and tranquil surroundings.\",\n" +
            "    \"locationOverview\": \"Located on the crystal-clear shores of Lake Emerald, offering serene boat rides and dockside dinners.\",\n" +
            "    \"images\": [\"images/hotel5.jpg\", \"images/room5.jpg\", \"images/sparoom.jpg\"],\n" +
            "    \"amenities\": [\"Lake View\", \"Kayaking & Boating\", \"Full Spa\", \"Barbecue Area\", \"Sunset Deck\", \"Free Breakfast\"]\n" +
            "  },\n" +
            "  {\n" +
            "    \"id\": 6,\n" +
            "    \"backendHotelId\": 693021,\n" +
            "    \"name\": \"Luxury Royal Hotel\",\n" +
            "    \"category\": \"luxury\",\n" +
            "    \"price\": 45000,\n" +
            "    \"priceMin\": 45000,\n" +
            "    \"priceMax\": 50000,\n" +
            "    \"rating\": 4.9,\n" +
            "    \"location\": \"Grand Boulevard\",\n" +
            "    \"description\": \"Experience royal treatment in our luxurious and elegant hotel.\",\n" +
            "    \"locationOverview\": \"Situated on the prestigious Grand Boulevard near designer boutiques and historic opera houses.\",\n" +
            "    \"images\": [\"images/hotel6.jpg\", \"images/room7.jpg\", \"images/dining2.jpg\"],\n" +
            "    \"amenities\": [\"Personal Butler\", \"Michelin Star Dining\", \"Rooftop Infinity Pool\", \"Chauffeur Service\", \"Luxury Spa\"]\n" +
            "  },\n" +
            "  {\n" +
            "    \"id\": 7,\n" +
            "    \"backendHotelId\": 782019,\n" +
            "    \"name\": \"City Central Plaza\",\n" +
            "    \"category\": \"city\",\n" +
            "    \"price\": 25000,\n" +
            "    \"priceMin\": 25000,\n" +
            "    \"priceMax\": 30000,\n" +
            "    \"rating\": 3.9,\n" +
            "    \"location\": \"Downtown Square\",\n" +
            "    \"description\": \"A modern hotel situated in the vibrant downtown area with easy access to attractions.\",\n" +
            "    \"locationOverview\": \"In the pulse of Downtown Square, moments away from financial districts, theaters, and metro hubs.\",\n" +
            "    \"images\": [\"images/hotel7.jpg\", \"images/room8.jpg\", \"images/gym.jpg\"],\n" +
            "    \"amenities\": [\"City Skyline View\", \"Conference Rooms\", \"24/7 Gym\", \"Cocktail Bar\", \"Valet Parking\"]\n" +
            "  },\n" +
            "  {\n" +
            "    \"id\": 8,\n" +
            "    \"backendHotelId\": 891023,\n" +
            "    \"name\": \"Hilltop Haven Resort\",\n" +
            "    \"category\": \"mountain\",\n" +
            "    \"price\": 30000,\n" +
            "    \"priceMin\": 30000,\n" +
            "    \"priceMax\": 35000,\n" +
            "    \"rating\": 4.1,\n" +
            "    \"location\": \"Sunset Heights\",\n" +
            "    \"description\": \"Relax in our mountain-view hotel with access to hiking trails and scenic landscapes.\",\n" +
            "    \"locationOverview\": \"Elevated high on Sunset Heights overlooking endless green valley horizons and golden twilights.\",\n" +
            "    \"images\": [\"images/hotel8.jpg\", \"images/room9.jpg\", \"images/game.jpg\"],\n" +
            "    \"amenities\": [\"Panoramics Deck\", \"Gaming Arcade\", \"Trekking Guides\", \"Fire Pit Lounge\", \"Open Air Pool\"]\n" +
            "  },\n" +
            "  {\n" +
            "    \"id\": 9,\n" +
            "    \"backendHotelId\": 902194,\n" +
            "    \"name\": \"Oceanfront Paradise\",\n" +
            "    \"category\": \"beach\",\n" +
            "    \"price\": 35000,\n" +
            "    \"priceMin\": 35000,\n" +
            "    \"priceMax\": 40000,\n" +
            "    \"rating\": 4.7,\n" +
            "    \"location\": \"Coral Cove\",\n" +
            "    \"description\": \"Enjoy breathtaking ocean views from every room and world-class dining options.\",\n" +
            "    \"locationOverview\": \"Direct beachside access at Coral Cove with turquoise waters and white sand stretching for miles.\",\n" +
            "    \"images\": [\"images/hotel9.jpg\", \"images/room10.jpg\", \"images/beach_view.jpg\"],\n" +
            "    \"amenities\": [\"Private Balcony\", \"Seafood Grill\", \"Scuba Diving\", \"Beach Hammocks\", \"Sunset Cruises\"]\n" +
            "  },\n" +
            "  {\n" +
            "    \"id\": 10,\n" +
            "    \"backendHotelId\": 102938,\n" +
            "    \"name\": \"Trident\",\n" +
            "    \"category\": \"luxury\",\n" +
            "    \"price\": 15000,\n" +
            "    \"priceMin\": 10000,\n" +
            "    \"priceMax\": 15000,\n" +
            "    \"rating\": 5.0,\n" +
            "    \"location\": \"Royal Enclave\",\n" +
            "    \"description\": \"Stay in the epitome of luxury and sophistication, with exclusive services and amenities.\",\n" +
            "    \"locationOverview\": \"Iconic flagship property located in the exclusive Royal Enclave, setting world benchmarks for elegance.\",\n" +
            "    \"images\": [\"images/hotel10.jpg\", \"images/room1.jpg\", \"images/lobby1.jpg\"],\n" +
            "    \"amenities\": [\"5-Star Luxury Service\", \"Private Plunge Pool\", \"Helipad Access\", \"Sommelier Wine Cellar\", \"Art Gallery\"]\n" +
            "  }\n" +
            "]";
    }

    private String getSingleHotelJson(int id) {
        String allJson = getAllHotelsJson();
        // Simple search for target ID block in json array
        String searchKey = "\"id\": " + id + ",";
        int index = allJson.indexOf(searchKey);
        if (index == -1) return null;

        int start = allJson.lastIndexOf("{", index);
        int braceCount = 0;
        int end = -1;
        for (int i = start; i < allJson.length(); i++) {
            char c = allJson.charAt(i);
            if (c == '{') braceCount++;
            else if (c == '}') {
                braceCount--;
                if (braceCount == 0) {
                    end = i + 1;
                    break;
                }
            }
        }
        if (start != -1 && end != -1) {
            return allJson.substring(start, end);
        }
        return null;
    }
}
