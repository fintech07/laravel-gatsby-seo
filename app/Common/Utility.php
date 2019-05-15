<?php
/**
 * Created by PhpStorm.
 * User: root
 * Date: 27/03/2018
 * Time: 23:06
 */

namespace App\Common;


class Utility
{
    public static function makeFriendlyTime($time)
    {
        $now = date("Y-m-d H:i:s");

        $secondsToNow = round(strtotime($now) - strtotime($time));

        if ($secondsToNow < 60) {
            return "$secondsToNow giây trước";
        } else if ($secondsToNow >= 60 && $secondsToNow < 3600) {
            $minutes = round($secondsToNow / 60);
            return "$minutes phút trước";
        } else if ($secondsToNow > 3600 && $secondsToNow < 86400) {
            $hours = round($secondsToNow / 3600);
            return "$hours giờ trước";
        } else if ($secondsToNow >= 86400 && $secondsToNow < 2592000) {
            $days = round($secondsToNow / 86400);
            return "$days ngày trước";
        } else if ($secondsToNow >= 2592000 && $secondsToNow < 31104000) {
            $months = round($secondsToNow / 2592000);
            return "$months tháng trước";
        } else {
            $years = round($secondsToNow / 31104000);
            return "$years năm trước";
        }
    }

    public static function getImageDefaultUrl()
    {
        return env('APP_URL') . '/img/image.png';
    }

    public static function getStoragePath($objId, $isDir = false)
    {
        $step = 15; // So bit de ma hoa ten thu muc tren 1 cap
        $layer = 3; // So cap thu muc
        $max_bits = PHP_INT_SIZE * 8;
        $result = "";

        for ($i = $layer; $i > 0; $i--) {
            $shift = $step * $i;
            $layer_name = $shift <= $max_bits ? $objId >> $shift : 0;

            $result .= $isDir ? DIRECTORY_SEPARATOR . $layer_name : "/" . $layer_name;
        }

        return $result;
    }

    public static function makeDirectory($dir, $mode = 0777, $recursive = true)
    {
        if (!file_exists($dir)) {
            $old_umask = umask(0);
            mkdir($dir, $mode, $recursive);
            umask($old_umask);
        }
    }

    /**
     * @todo phân chia phần số nguyên
     * @param $value
     * @param int $min_money
     * @param null $symbol
     * @return float|int|mixed|string
     */
    public static function numberFormat($value, $min_money = 1000, $symbol = null)
    {
        $value = intval($value);
        $value = $value < $min_money ?
            $value : ($value / $min_money) * $min_money;
        if (intval($value) >= $min_money) {
            if ($value != '' and is_numeric($value)) {
                $value = number_format($value, 2, ',', '.');
                $value = str_replace(',00', '', $value);
            }
        }
        if ($symbol)
            $value .= '' . $symbol;
        return $value;
    }

    /**
     * @todo Hiển thị thời gian hiện tại
     * @param $time
     * @param string $format
     * @return bool|string
     */
    public static function displayDatetime($time, $format = 'H:i d/m/Y')
    {
        if ($time == '00:00:00 0000:00:00'
            || $time == '0000:00:00 00:00:00'
            || $time == '0000-00-00 00:00:00'
            || $time == ''
            || $time == null
            || $time == 'null'
        ) {
            return '';
        }
        if (is_numeric($time)) {
            return date($format, intval($time));
        }
        return date($format, strtotime($time));
    }

    public static function fillZero($num, $fill = 4)
    {
        return sprintf("%0{$fill}d", $num);
    }
}