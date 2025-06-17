import React from "react";
import InputField from "@components/ui/InputField";
import Button from "@components/ui/Button";
import Link from "next/link";

export default function Login() {

    return (
        <div className="flex items-center justify-center min-h-screen px-4">
            <div className="w-full sm:w-3/4 md:w-2/3 lg:w-2/5 font-roboto xl:w-1/4 p-6 sm:p-8 border-[var(--light-green)] border rounded-2xl space-y-4 shadow-md bg-white">
                <h2 className="text-2xl font-bold text-center text-[var(--color-pink-500)]">Log In</h2>

                <InputField
                    type="email"
                    placeholder="Email"
                    className="p-3 w-full bg-gray-200 rounded focus:border-[var(--color-pink-600)] focus:outline-none border text-[var(--color-pink-500)]"
                />
                <InputField
                    type="password"
                    placeholder="Password"
                    className="p-3 w-full bg-gray-200 rounded focus:border-[var(--color-pink-600)] focus:outline-none border text-[var(--color-pink-500)]"

                />

                <Button className="bg-[var(--color-pink-500)] hover:bg-[var(--color-pink-600)] text-white py-2 px-6 mt-2 rounded cursor-pointer w-full">
                    Log In
                </Button>
            </div>
        </div>
    );
}
