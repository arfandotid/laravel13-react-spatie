import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import LayoutAuth from "@/Layouts/LayoutAuth";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";
import {
    Field,
    FieldContent,
    FieldDescription,
    FieldGroup,
    FieldLabel,
    FieldTitle,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Head, useForm } from "@inertiajs/react";
import { Loader2, UserPlus } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/Components/ui/radio-group";

export default function Register({ className, ...props }) {
    //destruct useForm
    const { data, setData, post, processing, errors } = useForm({
        tipe: "",
        name: "",
        email: "",
        username: "",
        password: "",
        password_confirmation: "",
    });

    //function "loginHandler"
    const handleSubmit = async (e) => {
        e.preventDefault();

        //fetch to login
        post("/register");
    };

    return (
        <>
            <Head title="Register" />
            <LayoutAuth>
                <div
                    className={cn("flex flex-col gap-6", className)}
                    {...props}
                >
                    <Card>
                        <CardHeader className="text-center">
                            <CardTitle className="text-xl">
                                Daftar Akun
                            </CardTitle>
                            <CardDescription>
                                Daftar ke akun untuk masuk ke aplikasi
                            </CardDescription>
                        </CardHeader>
                        <CardContent>
                            <form onSubmit={handleSubmit}>
                                <RadioGroup
                                    value={data.tipe}
                                    onValueChange={(value) =>
                                        setData("tipe", value)
                                    }
                                    className="flex mb-4"
                                >
                                    <FieldLabel htmlFor="pelanggan">
                                        <Field orientation="horizontal">
                                            <FieldContent>
                                                <FieldTitle>
                                                    Pelanggan
                                                </FieldTitle>
                                                <FieldDescription>
                                                    Daftar Sebagai Pelanggan
                                                </FieldDescription>
                                            </FieldContent>
                                            <RadioGroupItem
                                                value="pelanggan"
                                                id="pelanggan"
                                            />
                                        </Field>
                                    </FieldLabel>
                                    <FieldLabel htmlFor="tukang">
                                        <Field orientation="horizontal">
                                            <FieldContent>
                                                <FieldTitle>Tukang</FieldTitle>
                                                <FieldDescription>
                                                    Daftar sebagai tukang
                                                </FieldDescription>
                                            </FieldContent>
                                            <RadioGroupItem
                                                value="tukang"
                                                id="tukang"
                                            />
                                        </Field>
                                    </FieldLabel>
                                </RadioGroup>
                                {errors.tipe && (
                                    <FieldDescription className="text-red-500">
                                        {errors.tipe}
                                    </FieldDescription>
                                )}
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="name">
                                            Nama
                                        </FieldLabel>
                                        <Input
                                            id="name"
                                            type="text"
                                            placeholder="Nama Lengkap"
                                            value={data.name}
                                            className={
                                                errors.name
                                                    ? "border-red-500 focus-visible:ring-red-500"
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setData("name", e.target.value)
                                            }
                                        />
                                        {errors.name && (
                                            <FieldDescription className="text-red-500">
                                                {errors.name}
                                            </FieldDescription>
                                        )}
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="email">
                                            Email
                                        </FieldLabel>
                                        <Input
                                            id="email"
                                            type="text"
                                            placeholder="Email"
                                            value={data.email}
                                            className={
                                                errors.email
                                                    ? "border-red-500 focus-visible:ring-red-500"
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setData("email", e.target.value)
                                            }
                                        />
                                        {errors.email && (
                                            <FieldDescription className="text-red-500">
                                                {errors.email}
                                            </FieldDescription>
                                        )}
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="username">
                                            Username
                                        </FieldLabel>
                                        <Input
                                            id="username"
                                            type="text"
                                            placeholder="Username"
                                            value={data.username}
                                            className={
                                                errors.username
                                                    ? "border-red-500 focus-visible:ring-red-500"
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "username",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.username && (
                                            <FieldDescription className="text-red-500">
                                                {errors.username}
                                            </FieldDescription>
                                        )}
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="password">
                                            Password
                                        </FieldLabel>
                                        <Input
                                            id="password"
                                            type="password"
                                            placeholder="Masukkan password"
                                            value={data.password}
                                            className={
                                                errors.password
                                                    ? "border-red-500 focus-visible:ring-red-500"
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "password",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.password && (
                                            <FieldDescription className="text-red-500">
                                                {errors.password}
                                            </FieldDescription>
                                        )}
                                    </Field>
                                    <Field>
                                        <FieldLabel htmlFor="password_confirmation">
                                            Konfirmasi Password
                                        </FieldLabel>
                                        <Input
                                            id="password_confirmation"
                                            type="password"
                                            placeholder="konfirmasi password"
                                            value={data.password_confirmation}
                                            className={
                                                errors.password_confirmation
                                                    ? "border-red-500 focus-visible:ring-red-500"
                                                    : ""
                                            }
                                            onChange={(e) =>
                                                setData(
                                                    "password_confirmation",
                                                    e.target.value,
                                                )
                                            }
                                        />
                                        {errors.password_confirmation && (
                                            <FieldDescription className="text-red-500">
                                                {errors.password_confirmation}
                                            </FieldDescription>
                                        )}
                                    </Field>
                                    <Field>
                                        <Button
                                            type="submit"
                                            disabled={processing}
                                        >
                                            {processing ? (
                                                <span className="flex items-center justify-center">
                                                    <Loader2 className="animate-spin mr-2" />
                                                    Memproses...
                                                </span>
                                            ) : (
                                                <span className="flex items-center justify-center">
                                                    <UserPlus className="w-5 h-5 mr-2" />
                                                    Daftar Sekarang
                                                </span>
                                            )}
                                        </Button>
                                        <FieldDescription className="text-center">
                                            {new Date().getFullYear()} &copy;
                                            Build with &hearts; by{" "}
                                            <a
                                                href="https://alamkoding.com"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="font-medium"
                                            >
                                                AlamKoding
                                            </a>
                                        </FieldDescription>
                                    </Field>
                                </FieldGroup>
                            </form>
                        </CardContent>
                    </Card>
                </div>
            </LayoutAuth>
        </>
    );
}
