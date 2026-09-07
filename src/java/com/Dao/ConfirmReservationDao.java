package com.dao;

import com.bean.ConfirmReservationBean;
import java.sql.Connection;
import java.sql.DriverManager;
import java.sql.PreparedStatement;

public class ConfirmReservationDao {

    private static final String URL = "jdbc:mysql://localhost:3306/hotel";
    private static final String USERNAME = "root";
    private static final String PASSWORD = "NewPassword123!";

    public boolean saveReservation(ConfirmReservationBean reservation) {

        boolean isSaved = false;
        Connection conn = null;
        PreparedStatement ps = null;

        try {

            // Diagnostic information
            System.out.println("=== CONFIRM DAO DB TEST ===");
            System.out.println("URL = " + URL);
            System.out.println("USERNAME = " + USERNAME);
            System.out.println("PASSWORD LENGTH = " + PASSWORD.length());

            // Connect to MySQL
            conn = DriverManager.getConnection(
                    URL,
                    USERNAME,
                    PASSWORD
            );

            System.out.println("=== CONFIRM DAO DB CONNECTION SUCCESS ===");

            // Insert reservation
            String query =
                    "INSERT INTO reservations " +
                    "(reservation_id, customer_id, hotel_id, room_id, " +
                    "checkin_date, checkout_date, guests, room_type, special_requests) " +
                    "VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

            ps = conn.prepareStatement(query);

            ps.setString(1, reservation.getReservationId());
            ps.setString(2, reservation.getCustomerId());
            ps.setString(3, reservation.getHotelId());
            ps.setString(4, reservation.getRoomId());
            ps.setString(5, reservation.getCheckinDate());
            ps.setString(6, reservation.getCheckoutDate());
            ps.setInt(7, reservation.getGuests());
            ps.setString(8, reservation.getRoomType());
            ps.setString(9, reservation.getSpecialRequests());

            int rowsInserted = ps.executeUpdate();

            if (rowsInserted > 0) {
                isSaved = true;
                System.out.println("=== RESERVATION INSERT SUCCESS ===");
            } else {
                System.out.println("=== RESERVATION INSERT FAILED: 0 ROWS ===");
            }

        } catch (Exception e) {

            System.out.println("=== CONFIRM DAO DATABASE ERROR ===");
            e.printStackTrace();

        } finally {

            try {
                if (ps != null) {
                    ps.close();
                }

                if (conn != null) {
                    conn.close();
                }

            } catch (Exception e) {
                System.out.println("=== ERROR CLOSING DATABASE RESOURCES ===");
                e.printStackTrace();
            }
        }

        return isSaved;
    }
}