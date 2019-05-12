<?php

/**
 * This file is part of the contentful/laravel package.
 *
 * @copyright 2015-2018 Contentful GmbH
 * @license   MIT
 */

return [
    /*
     * The ID of the space you want to access.
     */
    'space' => env('CONTENTFUL_SPACE_ID','f9qtzu9dvrki'),
    
    /*
     * The ID of the environment you want to access.
     */
    'environment' => env('CONTENTFUL_ENVIRONMENT_ID', 'master'),

    /*
     * An API key for the above specified space.
     */
    'token' => env('CONTENTFUL_DELIVERY_TOKEN','bef8878636daf1caabe2f86fea898a7b0c1383e4e20931164eac2fafd6e6d13a'),

    /*
     * Controls whether Contentful's Delivery or Preview API is accessed.
     */
    'preview' => env('CONTENTFUL_USE_PREVIEW', false),

    /*
     * The default locale to use when querying the API.
     */
    'defaultLocale' => env('CONTENTFUL_DEFAULT_LOCALE', null),

    /*
     * An array of further client options. See Contentful\Delivery\Client::__construct() for more.
     */
    'options' => [
        'baseUri' => $baseUri = null,
        'guzzle' => $guzzle = null,
        'logger' => $logger = null,
        'cache' => $cache = null,
        'autoWarmup' => $autoWarmup = false,
    ],
];
