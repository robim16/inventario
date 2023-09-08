<?php

/** @var \Illuminate\Database\Eloquent\Factory $factory */

use App\Proveedore;
use Faker\Generator as Faker;

$factory->define(Proveedore::class, function (Faker $faker) {
    return [
        'nombres' => $faker->name,
        'apellidos' => $faker->lastName,
        'identificacion' => $faker->randomNumber(8),
        'razon_social' => $faker->company,
        'telefono' => $faker->phoneNumber,
        'direccion' => $faker->address,
        'email' => $faker->email
    ];
});
