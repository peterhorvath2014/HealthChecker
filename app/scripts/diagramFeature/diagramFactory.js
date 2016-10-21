"use strict"
angular.module('healthcheckerApp')
    .factory('diagramFactory', function MainFactory($http, $q, $log) {
        return {
            getFinancialData: function() {
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/savings/collections/financialdata',
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
            insertNewFinancialData: function(financialData) {
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/savings/collections/financialdata',
                    method: 'POST',
                    data: {
                        financialData: financialData
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
            deleteFinancialData: function(id) {
                $log.debug(id);
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/savings/collections/financialdata/' + id.$oid,
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
            updateFinancialData: function(financialData, id) {
                $log.debug(financialData._id);
                return $http({
                    url: 'https://api.mongolab.com/api/1/databases/savings/collections/financialdata/' + id.$oid,
                    method: 'PUT',
                    data: {
                        financialData: financialData
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