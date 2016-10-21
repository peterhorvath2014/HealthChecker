"use strict"
angular.module('healthcheckerApp')
    .factory('appFctr', function MainFactory($http, $q, $log) {
        return {
            getData: function() {
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/healthchecker/collections/dailydata',
                    method: 'GET',
                    params: {
                        'apiKey': 'rLXW_SYqupDY0XvVv50ge8CVYUgrsMRZ'
                    }
                }).then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            $log.info(response);
                            return response.data;
                        }
                        else {
                            $log.error('Error: ' + JSON.stringify(response));
                            return $q.reject(response.data);
                        }
                    },
                    function(response) {
                        $log.error('Error: ' + JSON.stringify(response));
                        return $q.reject(response.data);
                    });
            },
            insertNewData: function(data) {
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/healthchecker/collections/dailydata',
                    method: 'POST',
                    data: {
                        data: data
                    },
                    params: {
                        'apiKey': 'rLXW_SYqupDY0XvVv50ge8CVYUgrsMRZ'
                    }
                }).then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            $log.info(response);
                            return response.data;
                        }
                        else {
                            $log.error('Error: ' + JSON.stringify(response));
                            return $q.reject(response.data);
                        }
                    },
                    function(response) {
                        $log.error('Error: ' + JSON.stringify(response));
                        return $q.reject(response.data);
                    });
            },
            deleteData: function(id) {
                $log.debug(id);
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/healthchecker/collections/dailydata/' + id.$oid,
                    method: 'DELETE',
                    params: {
                        'apiKey': 'rLXW_SYqupDY0XvVv50ge8CVYUgrsMRZ'
                    }
                }).then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            $log.info(response);
                            return response.data;
                        }
                        else {
                            $log.error('Error: ' + JSON.stringify(response));
                            return $q.reject(response.data);
                        }
                    },
                    function(response) {
                        $log.error('Error: ' + JSON.stringify(response));
                        return $q.reject(response.data);
                    });
            },
            updateData: function(data, id) {
                $log.debug(data._id);
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/healthchecker/collections/dailydata/' + id.$oid,
                    method: 'PUT',
                    data: {
                        data: data
                    },
                    params: {
                        'apiKey': 'rLXW_SYqupDY0XvVv50ge8CVYUgrsMRZ'
                    }
                }).then(
                    function(response) {
                        if (typeof response.data === 'object') {
                            $log.info(response);
                            return response.data;
                        }
                        else {
                            $log.error('Error: ' + JSON.stringify(response));
                            return $q.reject(response.data);
                        }
                    },
                    function(response) {
                        $log.error('Error: ' + JSON.stringify(response));
                        return $q.reject(response.data);
                    });
            }
        };
    });