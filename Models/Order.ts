import mongoose from "mongoose";

interface DeliveryDetails {
    name: string;
    email: string;
    address: string;
    city: string;
    country: string,
    expiry: string,
    cvc: string,
}

interface CartItems {
    menuId: mongoose.Schema.Types.ObjectId;
    name: string;
    image: string;
    price: number;
    description: string;
    Quantity: number;
    status: "Pending" | "Confirmed" | "preparing" | "outfordelivery" | "delivered";
}

interface Order extends mongoose.Document {
    user: mongoose.Schema.Types.ObjectId;
    restaurant: mongoose.Schema.Types.ObjectId;
    deliveryDetails: DeliveryDetails;
    MenuItemsList: CartItems[];
    totalAmount: number;
}

const OrderSchema: mongoose.Schema<Order> = new mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "UserModel",
        required: true,
    },
    restaurant: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "Restaurant",
        required: true,
    }],
    deliveryDetails: {
        email: {
            type: String,
            required: true,
        },
        name: {
            type: String,
            required: true,
        },
        address: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        expiry: {
            type: String,
            required: true,
        },
        cvc: {
            type: String,
            required: true,
        }
    },
    MenuItemsList: [
        {
            menuId: {
                type: mongoose.Schema.Types.ObjectId,
                ref: "MenuModel",
                required: true,
            },
            name: {
                type: String,
                required: true,
            },
            image: {
                type: String,
                // required: true,
            },
            price: {
                type: Number,
                required: true,
            },
            Quantity: {
                type: Number,
                required: true,
            },
            description: {
                type: String,
                required: true,
            },
            status: {
                type: String,
                enum: ["Pending", "Confirmed", "Preparing", "Outfordelivery", "Delivered"],
                default: "Pending",
                required: true,
            },
        },
    ],
    totalAmount: {
        type: Number,
        required: true,
    },
}, { timestamps: true });

export default mongoose.model<Order>("Order", OrderSchema);
