package com.servlet.api;

import com.bean.ConfirmReservationBean;
import com.util.DBConnection;
import java.sql.Connection;
import java.sql.PreparedStatement;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

/**
 * Read/delete adapter for the reservation model already written by
 * ConfirmReservationDao. It intentionally leaves all legacy DAOs untouched.
 */
public class ApiReservationDao {
    private static final String SELECT_RESERVATIONS =
            "SELECT reservation_id, customer_id, hotel_id, room_id, checkin_date, "
            + "checkout_date, guests, room_type, special_requests "
            + "FROM reservations ORDER BY checkin_date DESC";
    private static final String DELETE_RESERVATION =
            "DELETE FROM reservations WHERE reservation_id = ?";

    public List<ConfirmReservationBean> getAllReservations()
            throws ClassNotFoundException, SQLException {
        List<ConfirmReservationBean> reservations = new ArrayList<>();
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(SELECT_RESERVATIONS);
             ResultSet resultSet = statement.executeQuery()) {
            while (resultSet.next()) {
                ConfirmReservationBean reservation = new ConfirmReservationBean();
                reservation.setReservationId(resultSet.getString("reservation_id"));
                reservation.setCustomerId(resultSet.getString("customer_id"));
                reservation.setHotelId(resultSet.getString("hotel_id"));
                reservation.setRoomId(resultSet.getString("room_id"));
                reservation.setCheckinDate(resultSet.getString("checkin_date"));
                reservation.setCheckoutDate(resultSet.getString("checkout_date"));
                reservation.setGuests(resultSet.getInt("guests"));
                reservation.setRoomType(resultSet.getString("room_type"));
                reservation.setSpecialRequests(resultSet.getString("special_requests"));
                reservations.add(reservation);
            }
        }
        return reservations;
    }

    public boolean deleteByReservationId(String reservationId)
            throws ClassNotFoundException, SQLException {
        try (Connection connection = DBConnection.getConnection();
             PreparedStatement statement = connection.prepareStatement(DELETE_RESERVATION)) {
            statement.setString(1, reservationId);
            return statement.executeUpdate() == 1;
        }
    }
}
